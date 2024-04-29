import Page from "../../core/templates/page";

enum ErrorType {
  Error_404 = 404,
}

class ErrorPage extends Page {
  private errorType: ErrorType | string;
  static TextObject: { [prop: string]: string } = {
    '404': 'Error! Page not found',
  }
  constructor(id: string, errorType: ErrorType | string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    this.container.append(title);
    return this.container;
  }
}

export default ErrorPage;
export { ErrorType }