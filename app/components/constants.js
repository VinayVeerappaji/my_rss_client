export const lightBorder = `1px solid black`;
export const darkBorder = `2.5px solid black`;
export const fontFamilyOne = `'Crete Round', serif`;
export const fontFamilyTwo = `'ABeeZee', sans-serif`;

export const randomBackgroundColor = () => {

    return 'white';

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