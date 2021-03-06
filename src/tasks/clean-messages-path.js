// @flow
import { Log } from '../utils';
import paths from '../config/paths';
import rimraf from 'rimraf';

const log = new Log();

export default async function (): Promise<void> {
  return new Promise((resolve, reject) => {
    rimraf(paths.TRANSLATIONS, (error) => {
      if (error) {
        return reject(error);
      }

      log.info(`Removed translations path at "${paths.TRANSLATIONS}".`);

      return resolve();
    });
  });
}
