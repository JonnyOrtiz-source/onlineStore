import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

function OfferingEditForm({ BASE_URL, onUpdateOffering, isAdmin }) {
   const initialData = {
      name: '',
      price: 0,
      desc: '',
      type: '',
      likes: 0,
      featured: false,
      image: '',
   };
   const { formData, setFormData, handleChange } = useForm(initialData);

   const history = useHistory();
   const { id } = useParams();

   useEffect(() => {
      fetch(`${BASE_URL}/offerings/${id}`)
         .then((res) => res.json())
         .then((offering) => setFormData(offering));
   }, [id, BASE_URL, setFormData]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(formData),
      };

      fetch(`${BASE_URL}/offerings/${id}`, configObj)
         .then((resp) => resp.json())
         .then((updatedOffering) => {
            onUpdateOffering(updatedOffering);
            history.push(`/offerings/${id}`);
         });
   };

   const renderEditForm = (
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
         <h3>Edit Offering</h3>

         <label htmlFor="name">Name</label>
         <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
         />

         <label htmlFor="price">Price</label>
         <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
         />

         <label htmlFor="desc">Description</label>
         <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
         />

         <label htmlFor="type">Type</label>
         <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
         >
            <option value="1">salon</option>
            <option value="2">spa</option>
         </select>

         <label htmlFor="image">Image</label>
         <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
         />

         <button type="submit">Update Offering</button>
      </form>
   );

   return (
      <div>
         {isAdmin ? (
            renderEditForm
         ) : (
            <div className="error">
               <h3>Error: only an admin can edit</h3>
            </div>
         )}
      </div>
   );
}

export default OfferingEditForm;
