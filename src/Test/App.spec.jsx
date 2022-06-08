import {render} from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('should render list items', () => {
    const {getByText} = render(<App/>)

    expect(getByText('charmander')).toBeInTheDocument()
  });});
