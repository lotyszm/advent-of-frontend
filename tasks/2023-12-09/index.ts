export interface Tool {
  init: () => void;
  update: () => void;
  dispose: () => void;
}

export class Equipment {
  private tools: Tool[] = [];
  private toolsInitialized: Tool[] = [];

  registerTools(tool: Tool) {
    this.tools.push(tool);
  }

  initializeTools() {
    this.tools.forEach((tool) => {
      tool.init();
      this.toolsInitialized.push(tool);
    });
    // this.tools.length = 0;
  }

  updateTools() {
    if (this.toolsInitialized.length === 0) {
      throw new Error("Cannot update any tools before initialization.");
    }
    this.toolsInitialized.forEach((tool) => {
      tool.update();
    });
  }

  disposeTools() {
    this.toolsInitialized.forEach((tool) => {
      tool.dispose();
    });
  }
}
