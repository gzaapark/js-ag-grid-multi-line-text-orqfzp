import './style.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import * as ag from 'ag-grid-community';

// HEADER HEIGHT CONFIGUATION
function headerHeightSetter() {
  var padding = 20;
  var height = headerHeightGetter() + padding;
  gridOptions.api.setHeaderHeight(height);
  gridOptions.api.resetRowHeights();
}

function headerHeightGetter() {
  var columnHeaderTexts = [
    ...document.querySelectorAll('.ag-header-cell-text')
  ];
  var clientHeights = columnHeaderTexts.map(
    headerText => headerText.clientHeight
  );
  console.log(clientHeights);
  var tallestHeaderTextHeight = Math.max(...clientHeights);

  return tallestHeaderTextHeight;
}

// GRID CONFIGURATION
var columnDefs = [
  {
    headerName:
      'XXX Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae arcu posuere, euismod mi ut, gravida ante',
    field: 'a',
    children: [
      {
        field: 'aa',
        headerName:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae arcu posuere, euismod mi ut, gravida ante'
      },
      {
        field: 'ab',
        headerName:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae arcu posuere, euismod mi ut, gravida ante'
      }
    ]
  },
  {
    headerName:
      'Donec luctus condimentum arcu id facilisis. Duis nec varius quam, sed egestas augue',
    field: 'b'
  },
  {
    headerName: 'Integer porta eros risus, quis viverra nibh efficitur mattis',
    field: 'c'
  }
];

var defaultColDef = {
  flex: 1,
  resizable: true
};
var rowData = [
  {
    a: 1,
    b: 'Vivamus viverra interdum sapien, non finibus risus venenatis vitae',
    c: 'Praesent elementum consequat rhoncus'
  },
  {
    a: 2,
    b: 'Donec eget sagittis ipsum',
    c: 'Aliquam at efficitur libero, eget viverra turpis'
  },
  {
    a: 3,
    b: 'Etiam vehicula consectetur vestibulum',
    c: 'Morbi accumsan ultricies orci, et efficitur magna malesuada sit amet'
  }
];

var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  defaultColDef: defaultColDef,
  onFirstDataRendered: headerHeightSetter,
  onColumnResized: headerHeightSetter
};

new ag.Grid(document.querySelector('#myGrid'), gridOptions);
