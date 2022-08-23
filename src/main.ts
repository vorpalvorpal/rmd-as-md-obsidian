import { Plugin } from 'obsidian';

export default class TxtAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["rmd"], "markdown");
    this.registerExtensions(["Rmd"], "markdown");
    this.registerExtensions(["qmd"], "markdown");
    this.registerExtensions(["Qmd"], "markdown");
  }
}
