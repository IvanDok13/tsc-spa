import MainPage from '../main';
import Page from '../../core/templates/page';
import StatisticsPage from '../statistics';
import SettingsPage from '../settings';
import Header from '../../core/components/header';
import ErrorPage, { ErrorType } from '../error';

export const enum PageId {
  MainPage = 'main-page',
  StatisticsPage = 'statistics-page',
  SettingsPage = 'settings-page',
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
  private initialPage: MainPage;
  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPage = document.querySelector(`#${App.defaultPageId}`);

    if (currentPage) {
      currentPage.remove();
    }

    let page: Page | null = null;

    if (idPage === PageId.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageId.StatisticsPage) {
      page = new StatisticsPage(idPage);
    } else if (idPage === PageId.SettingsPage) {
      page = new SettingsPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorType.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  enableRoutChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      console.log('hashchange');
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new MainPage('main-page');
    this.header = new Header('header', 'header');
  }
  run() {
    // const mainPageHTML = this.initialPage.render();
    // this.container.append(mainPageHTML);
    App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRoutChange();
  }
}

export default App;