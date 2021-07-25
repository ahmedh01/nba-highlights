export default {
    state: () => ({
        videos: [],
    }),

    getters: {
        lastVideoName: (state) => {
            if (state.videos.length > 0)
                return state.videos[state.videos.length - 1].name
            else return null
        },
    },

    mutations: {
        SET_VIDEOS(state, payload) {
            state.videos.push(...payload)
        },
    },

    actions: {
        getHighlights({ commit, getters }) {
            let videos = []
            let endpoint = `https://www.reddit.com/r/nba/search.json?q=flair%3AHighlight&restrict_sr=on&sort=new&t=all&limit=20`

            if (getters.lastVideoName)
                endpoint += `&after=${getters.lastVideoName}`

            fetch(endpoint)
                .then((response) => response.json())
                .then((data) => {
                    data.data.children.forEach((item) => {
                        videos.push({
                            name: item.data.name,
                            title: item.data.title,
                            url: item.data.url,
                            thumbnail: item.data.secure_media
                                ? item.data.secure_media.oembed.thumbnail_url
                                : '',
                        })
                    })
                    commit('SET_VIDEOS', videos)
                    console.log(videos)
                })
                .catch((error) => console.error('Error getting feed: ', error))
        },
    },
}
