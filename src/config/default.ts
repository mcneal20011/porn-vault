import { IConfig } from "./schema";

const defaultConfig: IConfig = {
  auth: {
    password: null,
  },
  binaries: {
    ffmpeg: "",
    ffprobe: "",
    izzyPort: 8000,
    giannaPort: 8001,
  },
  import: {
    bulk: [],
    images: [],
    videos: [],
  },
  log: {
    maxSize: 2500,
  },
  matching: {
    applyActorLabels: true,
    applySceneLabels: true,
    applyStudioLabels: true,
  },
  persistence: {
    backup: {
      enable: true,
      maxAmount: 10,
    },
    libraryPath: process.cwd(),
  },
  plugins: {
    allowActorThumbnailOverwrite: false,
    allowMovieThumbnailOverwrite: false,
    allowSceneThumbnailOverwrite: false,
    createMissingActors: false,
    createMissingLabels: false,
    createMissingMovies: false,
    createMissingStudios: false,
    events: {},
    register: {},
  },
  processing: {
    doProcessing: true,
    generatePreviews: true,
    generateScreenshots: false,
    imageCompressionSize: 720,
    readImagesOnImport: false,
    screenshotInterval: 120,
  },
  scan: {
    excludeFiles: [],
    interval: 10800000,
    scanOnStartup: true,
  },
  server: {
    https: {
      certificate: "",
      enable: false,
      key: "",
    },
    port: 3000,
  },
};

export default defaultConfig;
