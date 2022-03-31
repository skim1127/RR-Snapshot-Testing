import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import GitHubCard from './components/GitHubCard';

// Snapshot Testing
test('renders a snapshot', () => {
  // The call toJSON is important 
  // because it turns the component representation into JSON
  const tree = renderer.create(<App/>).toJSON()
  // console.log(tree)
  expect(tree).toMatchSnapshot()
})

// Snapshot testing for GitHubCard Component
test('renders a github card component', () => {
  const tree = renderer.create(<GitHubCard/>).toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})