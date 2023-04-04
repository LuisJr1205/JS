const NAME = "malvestida",
    DOMIAN = `https://${NAME}.com`,
    SITE = `${DOMIAN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    POST = `${API_WP}/posts`,
    CATEGORIES = `${API_WP}/categories`,
    SEARCH = `${API_WP}/search?_embed&search=`;

export default {
    NAME,
    DOMIAN,
    SITE,
    API_WP,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH
}