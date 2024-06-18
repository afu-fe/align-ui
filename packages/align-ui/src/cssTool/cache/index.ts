class Cache {
  private styles: Map<string, any>;

  constructor() {
    this.styles = new Map();
  }

  getStyle(key: string): any {
    return this.styles.get(key);
  }

  setStyle(key: string, style: any): void {
    this.styles.set(key, style);
  }

  allStyle(): Map<string, any> {
    return this.styles;
  }
}

export default Cache;
