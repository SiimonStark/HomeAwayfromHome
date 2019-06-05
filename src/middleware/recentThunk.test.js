import {recentThunk} from './recentThunk';
import {isLoading, isError, fetchRecent} from '../store/actions/';

describe('recentThunk', () => {
  let mockURL;
  let mockJobs;
  let mockDispatch;

  beforeEach(() => {
    mockURL = 'www.someurl.com';
    mockJobs = {listing: {name: 'Company'}};
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockJobs
      })
    }))
  })

  it('calls dispatch with isLoading of true', () => {
    const thunk = recentThunk(mockURL)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('calls fetch with the correct param', () => {
    const thunk = recentThunk(mockURL)

    thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockURL)
  });
  it('should dispatch isError with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))

    const thunk = recentThunk(mockURL) 

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isError('Something went wrong'))
  });
  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = recentThunk(mockURL) // inner function

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });
  it('should dispatch fetchRecent with the correct params', async () => {
    const mockData = [
      { name: 'Christie', bio: 'Christie bio', image: 'Christie image' },
      { name: 'Will', bio: 'Will bio', image: 'Will image' }
    ]

    const thunk = recentThunk(mockURL)

    mockDispatch = jest.fn().mockImplementation(() => mockData)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
})