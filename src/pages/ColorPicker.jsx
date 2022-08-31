import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Header } from '../components';


const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex

  const btn = document.getElementById('preview2')
  const color = args.currentValue.hex

  btn.style.backgroundColor = color
  btn.innerHTML = color
}

const ColorPicker = () => {

  const handleCopy = (e) => {
    let color = e.target.innerHTML
    navigator.clipboard.writeText(color);
    e.target.innerHTML = "Copied!"
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-2xl">
      <Header category="App" title="Color Picker" />
      <div className='text-center'>

        <TooltipComponent content='Click to Copy' position='Center'>
          <button
            className='p-3 mb-1 mt-3 text-xl bg-green-500 w-40 rounded-2xl hover:drop-shadow-xl' id="preview2"
            onClick={handleCopy}
          >#008000</button>
        </TooltipComponent>

        <div id='preview' />

        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent
              id='inline-palette'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ColorPicker;
