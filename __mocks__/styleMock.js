module.exports = {
  '.tabs, .tabs--outer-wrapper': {
    display: 'flex',
  },
  '.tabs--outer-wrapper': {
    margin: '0 -15px',
    'overflow-x': 'auto',
  },
  '@media (min-width: 540px)': {
    '.tabs--outer-wrapper': {
      margin: '0 -30px',
    },
  },
  '@media (min-width: 720px)': {
    '.tabs--outer-wrapper': {
      margin: 0,
    },
  },
  '.tabs': {
    padding: 0,
    'list-style-type': 'none',
    'box-shadow': 'inset 0 -1px 0 #e3e3e3',
    position: 'relative',
    flex: '1 1 0%',
  },
  '.tabs > :first-child': {
    'margin-left': 0,
  },
  '@media (min-width: 960px)': {
    '.tabs > *': {
      'margin-left': '15px',
      'margin-right': '15px',
    },
  },
  '.tabs > *': {
    '-webkit-box-flex': 0,
    '-ms-flex': '0 0 auto',
    flex: '0 0 auto',
    margin: '0 10px',
  },
  '.tabs--current-content': {
    'margin-top': '32px',
  },
  '.tab': {
    display: 'block',
    padding: 0,
    border: 0,
    'border-bottom': '2px solid transparent',
    'border-radius': 0,
    background: 'transparent',
    color: '#4d4d4d',
    'font-size': '14px',
    'line-height': '40px',
    'letter-spacing': '.01em',
    'text-align': 'center',
    'text-decoration': 'none',
    transition: 'background-color .1s ease-out',
    'user-select': 'none',
    'white-space': 'nowrap',
    cursor: 'pointer',
  },
  '.tab:hover': {
    color: '#0095ff',
  },
  '.is-active': {
    position: 'relative',
    'border-color': '#0095ff',
    color: '#0095ff',
    'font-weight': 700,
    'letter-spacing': 0,
  },
};
