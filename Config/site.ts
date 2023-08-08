export interface SiteConfig {
    siteName: String;
    description: String;
    currentlyAt: String;
    socialLinks: {
        twitter: String;
        youtube: String;
        github: String;
        linkdin: String;
        instagram: String;
    }
}

export const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description: "A minimal and Lovely trabel blog which shares experiences and citiest around the world!",
    currentlyAt: "Budapest",
    socialLinks: {
        twitter: "http://teste1",
        youtube: "http://teste1",
        github: "http://teste1",
        linkdin: "http://teste1",
        instagram: "http://teste1",
    }
}