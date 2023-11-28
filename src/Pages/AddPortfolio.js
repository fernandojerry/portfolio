
import React, {useState} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { db, storage } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterTechUsed, setEnterTechUsed] = useState('')
    const [enterdisplay, setEnterDisplay] = useState('')
    const [enterLink, setEnterLink] = useState('')
    const [enterProjectImg, setEnterProjectImg] = useState(null)
    const [loading, setLoading] = useState('')
    const navigate = useNavigate()

    const addProduct = async(e) => {
        e.preventDefault()

        setLoading(true)
        // add product to firebase database

        try {
            const docRef = collection(db, 'projects')
            const storageRef = ref(storage, `projectImage/${Date.now() + enterProjectImg.name}`)

            const uploadTask = uploadBytesResumable(storageRef, enterProjectImg)

            uploadTask.on('state_changed', 
            () => {
                    
            },
            (error) => {
              
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    
                await addDoc(docRef, {
                    projectName: enterTitle,
                    description: enterDescription,
                    techUsed: enterTechUsed,
                    display: enterdisplay,
                    imgUrl: downloadURL,
                    link: enterLink
                });
                
            });
            setLoading(false)
            
            navigate('/')
            
          }
          );
          
        }catch(error){
            setLoading(false)
           
        }
        
        
    }

  return (
    <section className='bg-light pt-5 pb-5'>
        <Container>
           <Row>
            {
              loading ? (
                <h4>Loading....</h4>
              ) : (
                <Col lg='12'>
                <h4>Add Product</h4>
                <Form onSubmit={addProduct}>
                    <Form.Group className='form__group mb-3'>
                        <span className='text-danger'>Project Name</span>
                        <input type="text" className='w-100' placeholder='project name' value={enterTitle} onChange={(e)=> setEnterTitle(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className='form__group mb-3'>
                        <span className='text-danger'>Project Description</span>
                        <input type="text" className='w-100' placeholder='project Description' value={enterDescription} onChange={(e)=> setEnterDescription(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className='form__group mb-3'>
                        <span className='text-danger'>Tech used</span>
                        <input type="text" className='w-100' placeholder='React,html,css,js etc' value={enterTechUsed} onChange={(e)=> setEnterTechUsed(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className='form__group mb-3'>
                        <span className='text-danger'>Link</span>
                        <input type="text" placeholder='project' className='w-100'  value={enterLink} onChange={(e)=> setEnterLink(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className='form__group mb-3'>
                        <span className='text-danger'>Display</span>
                        <input type="text" placeholder='project' className='w-100'  value={enterdisplay} onChange={(e)=> setEnterDisplay(e.target.value)} required/>
                    </Form.Group>
                    
                    <div>
                    <span className='text-danger'>Project Image</span>
                    <Form.Group className='form__group border p-2'>
                        <input className='w-100' type="file" name='file'
                      onChange={(e) => setEnterProjectImg(e.target.files[0])} required/>
                    </Form.Group>
                    </div>

                    <Button className='mt-4' type='submit'>Add project</Button>
                </Form>
            </Col>
              )
            }
           </Row>
        </Container>
    </section>
  )
}

export default AddProduct
