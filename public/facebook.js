const getFbVideoInfo = async (fbUrl) => {
    const { default: getFbVideoInfo } = await import("fb-downloader-scrapper");
    return getFbVideoInfo(fbUrl);
};
require("../settings.js")

async function fbdl(fbUrl) {
try {
    const res = await getFbVideoInfo(fbUrl);
    return res
    } catch (error) {
    return console.log(error)
    }
}

module.exports = { fbdl }

