import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: './apitest',
    use: {
        viewport: { width: 1366, height: 768 },
        headless: false,
        screenshot: "on",
        trace: "on",
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
        ,
        launchOptions: {
            args: ["--start-maximized"],
        }
    },
    reporter: [
      ['html', { outputFolder: 'reports', open: 'never' }],
      ['list']
    ],
    globalSetup: require.resolve('./global-setup')
}
export default config;