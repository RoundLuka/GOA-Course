const Presentational = ( {handleSum, sum}) => {
    return (
        <form onSubmit={handleSum}>
            <input type="text" name="num1" id="" required/>
            <input type="text" name="num2" id="" required/>
            <input type="submit" />
            <p>Sum: {sum}</p>
        </form>
    );
};

export default Presentational;