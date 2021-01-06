import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
// import TestElements from '../components/TestElements'


const TestElements = () => {
  const [counter, setCounter] = React.useState(0)
   
  return (
   <>
     <h1 data-testid="counter">Counter: {counter }</h1>
     <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
     <button disabled data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
  </>
     )
  }
  
   describe('<TestElments />', () => {
    afterEach(cleanup);

    it('should equal to 0', () => {
      const { getByTestId } = render(<TestElements />); 
      expect(getByTestId('counter')).toHaveTextContent(0)
    });

    it('should be enabled', async () => {
      const { getByTestId } = render(<TestElements />);
      expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
      fireEvent.click(getByTestId('button-up'));
      await expect(getByTestId("counter")).toHaveTextContent("Counter: 1")
    });

    it('should be disabled', () => {
      const { getByTestId } = render(<TestElements />); 
      expect(getByTestId('button-down')).toBeDisabled()
    })
});