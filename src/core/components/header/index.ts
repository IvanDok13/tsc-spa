import Component from "../../templates/components";
import { PageId } from "../../../pages/app";

const Buttons = [
  {
    id: PageId.MainPage,
    text: 'Main Page',
  },
  {
    id: PageId.StatisticsPage,
    text: 'Statistics Page',
  },
  {
    id: PageId.SettingsPage,
    text: 'Settings Page',
  }
]

class Header extends Component {

  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageBtn() {
    const pageBtn = document.createElement('button');
    Buttons.forEach((btn) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${btn.id}`;
      buttonHTML.innerText = btn.text;
      pageBtn.append(buttonHTML);
    })
    this.container.append(pageBtn);
  }

  render() {
    this.renderPageBtn();
    return this.container;
  }
}

export default Header;