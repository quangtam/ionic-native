import { Plugin } from './plugin';


declare var navigator: any;
/**
 * @name Screenshot
 * @description Captures a screen shot
 * @usage
 * ```typescript
 * import {Screenshot} from 'ionic-native';
 *
 * // Take a screenshot and save to file
 * Screneshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess, onError);
 *
 * // Take a screenshot and get temporary file URI
 * Screneshot.URI(80).then(onSuccess, onError);
 * ```
 */
@Plugin({
  plugin: 'https://github.com/gitawego/cordova-screenshot.git',
  pluginRef: 'navigator.screenshot',
  repo: 'https://github.com/gitawego/cordova-screenshot.git'
})
export class Screenshot {

  /**
   *  Takes screenshot and saves the image
   *
   * @param {string} format. Format can take the value of either 'jpg' or 'png'
   * On ios, only 'jpg' format is supported
   * @param {number} quality. Determines the quality of the screenshot.
   *        Default quality is set to 100.
   * @param {string} filename. Name of the file as stored on the storage
   */
  static save(format?: string, quality?: number, filename?: string): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        navigator.screenshot.save(
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          },
          format,
          quality,
          filename
        );
      }
    );
  }

  /**
   *  Takes screenshot and returns the image as an URI
   *
   * @param {number} quality. Determines the quality of the screenshot.
   *        Default quality is set to 100.
   */
  static URI(quality?: number): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        navigator.screenshot.URI(
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          },
          quality
        );
      }
    );
  }
}
