import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
function OfferingForm({ BASE_URL, onAddOffering, isAdmin }) {
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

   const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify({ ...formData, likes: 0, featured: false }),
      };

      fetch(`${BASE_URL}/offerings`, configObj)
         .then((resp) => resp.json())
         .then((offering) => {
            onAddOffering(offering);
            setFormData({
               name: '',
               price: 0,
               desc: '',
               type: '',
               image: '',
            });
            history.push(`/offerings/${offering.id}`);
         });
   };

   const renderOfferingForm = (
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
         <h3>Add New Offering</h3>

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
            <option value="salon">salon</option>
            <option value="spa">spa</option>
         </select>

         <label htmlFor="image">Image</label>
         <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
         />

         <button type="submit">Add Offering</button>
      </form>
   );
   return (
      <div>
         {isAdmin ? (
            renderOfferingForm
         ) : (
            <div className="error">
               <h3>Error: only an admin can edit</h3>
            </div>
         )}
      </div>
   );
}

export default OfferingForm;
