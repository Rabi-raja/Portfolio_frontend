import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { io } from 'socket.io-client'

const AdminPage = () => {
  const [msg, setMsg] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const socket = io('https://portfoliobackend-production-d54c.up.railway.app', {
  transports: ['websocket'],
})

    socket.on('connect', () => {
      console.log("Connected to socket server with id", socket.id)
    })
    socket.on("new message", (clientMessage) => {
      console.log("Socket event received: new message", clientMessage)
      toast.info(`New message from ${clientMessage.first_name}`)
      setMsg(prev => [clientMessage, ...prev])
    })
   
    const fetchMessages = async () => {
      const token = localStorage.getItem('token')
      try {
        const res = await axios.get('https://portfoliobackend-production-d54c.up.railway.app/api/v1/client/get-client', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

        setMsg(res.data.data)
        console.log('API response:', res.data)
      } catch (err) {
        console.error('Error fetching messages:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
    return () => {
      socket.disconnect()
    }
  }, [])

  const deleteMsg = async (id) => {
    const token = localStorage.getItem('token')
    try {
      await axios.delete(`https://portfoliobackend-production-d54c.up.railway.app/api/v1/client/delete-clientmsg/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setMsg(msg.filter(m => m._id !== id))
    } catch (err) {
      console.log('Delete failed', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-pink-900 to-cyan-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-[#121024] rounded-2xl shadow-2xl p-4 sm:p-6">
        <h1
          className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-cyan-400"
          style={{
            textShadow: '0 0 10px #00fff7, 0 0 20px #ff00c8, 0 0 30px #9900ff',
          }}
        >
          Client Messages (Admin)
        </h1>

        {loading ? (
          <div className="text-center text-cyan-300 font-semibold text-lg animate-pulse">
            Loading messages...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 text-white table-auto sm:table-fixed">
              <thead className="bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-700 text-white">
                <tr>
                  <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold">Name</th>
                  <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold">Email</th>
                  <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold hidden sm:table-cell">Phone</th>
                  <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold hidden md:table-cell">Subject</th>
                  <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold max-w-xs truncate">Message</th>
                                    <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold max-w-xs truncate">Date</th>
                  <th className="text-left p-2 sm:p-3 border-b border-gray-600 text-sm sm:text-lg font-semibold text-red-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(msg) && msg.length > 0 ? (
                  msg.map((items) => (
                    <tr
                      key={items._id}
                      className="hover:bg-gradient-to-r hover:from-cyan-800 hover:via-pink-800 hover:to-purple-900 transition-colors"
                    >
                      <td className="p-2 sm:p-3 border-b border-gray-700 text-sm sm:text-base">{items.first_name}</td>
                      <td className="p-2 sm:p-3 border-b border-gray-700 break-words text-sm sm:text-base">{items.email}</td>
                      <td className="p-2 sm:p-3 border-b border-gray-700 hidden sm:table-cell text-sm sm:text-base">{items.phone}</td>
                      <td className="p-2 sm:p-3 border-b border-gray-700 hidden md:table-cell text-sm sm:text-base">{items.subject}</td>
                      <td className="p-2 sm:p-3 border-b border-gray-700 max-w-xs truncate text-sm sm:text-base">{items.message}</td>
                      <td className="p-2 sm:p-3 border-b border-gray-700 max-w-xs truncate text-sm sm:text-base">{new Date(items.createdAt).toLocaleString()}</td>
                      

                      <td className="p-2 sm:p-3 border-b border-gray-700 text-sm sm:text-base">
                        <button
                          onClick={() => deleteMsg(items._id)}
                          className="text-red-500 hover:text-red-700 font-bold transition"
                          aria-label={`Delete message from ${items.first_name}`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center p-6 text-cyan-300 font-semibold">
                      No messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  )
}

export default AdminPage
