import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getHistory, deleteHistoryVideo } from '../services/allAPI'
import { useEffect, useState } from 'react'

function History() {
  const [history, setHistory] = useState([])

  const getAllWatchHistory = async () => {
    const { data } = await getHistory()
    setHistory(data);
  }

  const handleHistoryDelete = async (id) => {
    const response = await deleteHistoryVideo(id)
    console.log(response);
    getAllWatchHistory()
  }

  useEffect(() => { getAllWatchHistory() }, [])

  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={'/'}>Back To Home</Link>
      </div>

      <Table className='border border-2 text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length > 0 ?
              history.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td> <a href={item?.embedLink} target='_blank'>{item?.embedLink}</a> </td>
                  <td>{item?.timestamp}</td>
                  <td>
                    <button className='btn' onClick={() => handleHistoryDelete(item?.id)}>
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              )) : <p className='text-danger'>Nothing to Display</p>
          }
        </tbody>
      </Table>
    </>
  )
}

export default History