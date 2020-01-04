import React, { useState, useEffect } from 'react';
import { fetchStoriesData } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import '../../index.css'
import api from '../../utils/api'

const StoriesList = () => {
     // console.log('List props', props)
     const state = useSelector(state => state)
     console.log('State', state)
     const dispatch = useDispatch()
    //  const [editing, setEditing] = useState(false)
    //  const [storyToEdit, setStoryToEdit] = useState({
    //       title: '',
    //       contents:''
    //  })


          useEffect(() => {
               dispatch(fetchStoriesData())
               // eslint-disable-next-line
          },[])

      

    //  const editStory = story => {
    //       setEditing(true)
    //       setStoryToEdit(story)
    //  }

    //  const saveEdit = e => {
    //       e.preventDefault()
    //       api()
    //       .put(`/story/${storyToEdit.id}`, storyToEdit)
    //       .then(res => {
    //            console.log('Put req', res)
    //            setEditing(false)
    //            dispatch(fetchStoriesData(state.stories.map(item => item.id === res.data.id? res.data:item)))
    //       })
    //       .catch(err => console.log('Put err', err.response))
    //  }

    //  const deleteStory = story => {
    //       api()
    //       .delete(`/story/${story.id}`)
    //       .then(res => {
    //            console.log('Del res', res)
    //            dispatch(fetchStoriesData())
    //            setEditing(false)
    //            // updateStories(stories.filter(story => story.id !== res.data))
    //            // props.history.push('/stories')
    //       })
    //       .catch(err => console.log(err.response))
    //  }

    return ( 
     <div>
          <h2>Stories</h2>
               <div className='list'>
                    {state.stories.map(i => (
                         <div className='story' key={i.id}>
                              <h4>Username:{i.name}</h4>
                              <h4>Email:{i.email}</h4>
                              <p>{i.story} </p>
                         </div>
                    ))}
                    
               </div>
     </div>
     );
}
 
export default StoriesList;