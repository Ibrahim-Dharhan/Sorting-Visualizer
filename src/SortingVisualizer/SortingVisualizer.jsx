import React from "react";
import getMergeSortAnimations from "../sortingAlgorithms/mergeSort";
import getBubbleSortAnimations from "../sortingAlgorithms/bubbleSort";
import getQuickSortAnimations from "../sortingAlgorithms/quickSort";
import getHeapSortAnimations from "../sortingAlgorithms/heapSort";

import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = (window.screen.width - 80) / 4;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(
      this.state.array,
      0,
      this.state.array.length - 1
    );
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const Notswapping = i % 4 !== 2;
      if (Notswapping) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (barTwoIdx < 0) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else if (animations[i][0] === true) {
        const [barOneIdx, barTwoIdx] = animations[i + 1];
        if (barTwoIdx < 0) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = "yellow";
          barTwoStyle.backgroundColor = "yellow";
          const height1 = barTwoStyle.height;
          const height2 = barOneStyle.height;

          barOneStyle.height = `${height1}`;
          barTwoStyle.height = `${height2}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const Notswapping = i % 7 !== 4;
      if (animations[i][0] === false || i % 7 === 5){ 
        continue;
      }
      if (Notswapping) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          i % 7 === 0 || i % 7 === 2 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else if (animations[i][0] === true) {
        const [barOneIdx, barTwoIdx] = animations[i + 1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = "yellow";
          barTwoStyle.backgroundColor = "yellow";
          const height1 = barTwoStyle.height;
          const height2 = barOneStyle.height;

          barOneStyle.height = `${height1}`;
          barTwoStyle.height = `${height2}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const Notswapping = i % 3 !== 1;
      if (Notswapping) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS / 3);
      } else if (animations[i][0]) {
        const [barOneIdx, barTwoIdx] = animations[i + 1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = "yellow";
          barTwoStyle.backgroundColor = "yellow";
          const height1 = barTwoStyle.height;
          const height2 = barOneStyle.height;
          barOneStyle.height = `${height1}`;
          barTwoStyle.height = `${height2}`;
        }, i * ANIMATION_SPEED_MS / 3);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <div class="topnav">
          <a
            href="#Generate_Array"
            onClick={() => this.resetArray()}
            class="active"
          >
            Generate New Array
          </a>

          <a href="#Merge_sort" onClick={() => this.mergeSort()}>
            Merge Sort
          </a>
          <a href="#Quick_sort" onClick={() => this.quickSort()}>
            Quick Sort
          </a>
          <a href="#Heap_Sort" onClick={() => this.heapSort()}>
            Heap Sort
          </a>
          <a href="#Bubble_Sort" onClick={() => this.bubbleSort()}>
            Bubble Sort
          </a>
        </div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
