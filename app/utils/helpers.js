export const SaveToLocalStorage = (feed, link) => {
    let title = feed.title;
    let historyFromLocal = localStorage.getItem("history");
    let existingHistory
    if (historyFromLocal) {
      existingHistory = JSON.parse(historyFromLocal);
      console.log(existingHistory.some(item => item.link === link))
      if (!existingHistory.some(item => item.link === link)) {
        console.log('hi')
        localStorage.setItem("history", JSON.stringify([...existingHistory, { link: link, title: title }]));
      }
    } else {
      localStorage.setItem("history", JSON.stringify([{ link: link, title: title }]));
    }
  }

  export const GetFromLocalStorage = () => {
    let retriveHistory = localStorage.getItem("history")
    if (retriveHistory) {
      return JSON.parse(retriveHistory)
    } else {
      return undefined
    }
  }

  export const ClearLocalStorage = () => {
    window.localStorage.removeItem('history');
  }

  export const backgroundColorGenerator = () => {
    switch (Math.floor((Math.random() * 10) + 1)) {
      case 1: return '#a4c9d8';
      case 2: return '#ffe818';
      case 3: return '#fff';
      case 4: return '#cdf567';
      case 5: return '#ff4935';
      case 6: return '#3e8ef1';
      case 7: return '#ffbc4b';
      case 8: return '#a4c9d8';
      case 9: return '#ffe818';
      case 10: return '#fff';
    }
  }

  export const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
