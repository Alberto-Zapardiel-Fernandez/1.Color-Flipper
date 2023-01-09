/* Get Const DOM  */
const d = document,
  $btnSimple = d.getElementById('simple'),
  $btnHex = d.getElementById('hex'),
  $btnChangeColor = d.getElementById('changeColor'),
  $span = d.getElementById('color'),
  /* Define a mode for type of colors */
  SIMPLE = 'SIMPLE',
  HEX = 'HEX',
  PRIMARY_COLOR = '#F1f5f8',
  HEX_LENGTH = 6,
  /* Const for the hexCode posibilities */
  HEX_CHARACTERS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
SIMPLE_COLORS = [
  'green',
  'red',
  'rgba(133,122,200)',
  'rgba(209,147,134)',
  'rgba(234,231,61)',
  '#f15025',
  'blue',
  '#95B1C0',
  '#50BF44',
];
let mode = SIMPLE;

$btnHex.addEventListener('click', (e) => {
  mode = HEX;
  $btnSimple.classList.remove('btn-selected');
  $btnHex.classList.add('btn-selected');
});
$btnSimple.addEventListener('click', (e) => {
  mode = SIMPLE;
  $btnHex.classList.remove('btn-selected');
  $btnSimple.classList.add('btn-selected');
});

$btnChangeColor.addEventListener('click', () =>
  mode === HEX ? paintColor(HEX) : paintColor(SIMPLE)
);

const paintColor = (mode) => {
  $span.textContent = PRIMARY_COLOR;
  let color = '';
  if (mode === HEX) {
    color = '#';
    aleatoryNumber = 0;
    /* Go  through the HEX array a get a random position*/
    for (let i = 0; i < HEX_LENGTH; i++) {
      aleatoryNumber = getRandom(HEX_CHARACTERS.length);
      /* Concat the string */
      color += HEX_CHARACTERS[aleatoryNumber];
    }
    render(color);
  }
  if (mode === SIMPLE) {
    color = '';
    for (let i = 0; i < SIMPLE_COLORS.length; i++) {
      aleatoryNumber = getRandom(SIMPLE_COLORS.length);
      color = SIMPLE_COLORS[aleatoryNumber];
    }
    render(color);
  }
};
/* Funtion for render the views with colors */
function render(color) {
  /* Apply this color to body background-color */
  d.body.style.backgroundColor = color;
  /* Apply this color to the span text */
  $span.textContent = color;
}

/* Function for get a random number */
function getRandom(length) {
  return Math.floor(Math.random() * length);
}
