import React from 'react';
import {useState} from 'react';
import '../Search/Search.css';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Results/Results.css';


const Search = () => {

      const [selectedDate,setSelectedDate] = useState(null);
      const [location, setLocation] = useState('');
      const [estimateTime, setEstimateTime] = useState('');
      const [typeofcar, setTypeofcar] = useState('');
      

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedDate,location,estimateTime,typeofcar);
      }


       return(
        <div style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/Background.png'})` ,
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
        }} className="position-relative">

          <form className="vw-100 position-absolute top-50 start-50 translate-middle background-darkblue text-emphasis-dark px-5 py-2"
          onSubmit = {handleSubmit}>
            <div className="row">

            <div className="col-4">
              <label for="Location">Pickup Location</label>
              <input type="text" className="form-control" id="location" placeholder="Jurong West Street 61"
              value = {location} onChange={(e)=>setLocation(e.target.value)}/>
            </div>

            <div className="datepicker col-4 d-inline">
              <label for="specificSizeInputGroupUsername">Pickup Date and Time</label>
              <Datepicker wrapperClassName='datepicker'
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat = "MM/dd/yyyy  EE hh:mm a"
                minDate={new Date()}
                showTimeSelect
              />
            </div>

            <div className="row">
              <div class="col-4">
                <label for="specificSizeSelect">Type of Car</label>
                <select class="form-select" id="specificSizeSelect"
                value={typeofcar} onChange={(e)=>setTypeofcar(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Standard">Standard</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>

              <div className="input-group col mt-4">
                <input type="text" class="form-control" placeholder="Estimated Duration (In hours)" aria-label="Recipient's username" aria-describedby="button-addon2"
                value = {estimateTime} onChange={(e)=>setEstimateTime(e.target.value)}/>
                <button class="btn btn-dark" type="button" id="button-addon2">Calculate</button>
              </div>

            </div>
            

            </div>
            
            <div className="row mt-4 justify-content-center">
              <div className="col-auto">
                <button type="submit" className="btn btn-primary px-5">Submit</button>
              </div>
            </div>

          </form>

        </div>

        
      
       )
    
}

export default Search; 
