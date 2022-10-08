function SelectCity() {
    return (
        <>
            <div className="text-center city">
                <h1> Please Select City</h1>
                <select name="city" class="cityy">
                    <option value="" disabled="true" selected="true">Select Your city</option>

                    <option value="1"> Jaipur</option>
                </select>
                <button class="bg-success text-white p-2 rounded border cityValue"> Show Salons</button>
            </div>
        </>
    )
}

export default SelectCity
