import React from 'react';
// Import Bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* Create class component*/
class List extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state. Includes array to store to do list.
        this.state = {
            listArray: ["item1", "item2"],
            addItem: 0, 
            deleteItem: 0
        };

        // Binding to ensure that "this" works correctly
        this.handleAddChange = this.handleAddChange.bind(this);
        this.handleDeleteChange = this.handleDeleteChange.bind(this);
        this.addListItem = this.addListItem.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);

    }

    // Function to store list item to be added in state
    handleAddChange(event) {
        this.setState({
            addItem : event.target.value
            
        })
    
    }

    // Function to store list item to be deleted in state
    handleDeleteChange(event) {
        this.setState({
            deleteItem: event.target.value
        });
        
    }

    // Function to add list item to array
    addListItem(event) {
        // Checks that input field is not empty
        if (this.state.addItem !== "") {
            // Adds item to array
            this.state.listArray.push(this.state.addItem);

            /* Resets state so that it updates to do list immediately. I learned to do this here:
            https://www.pluralsight.com/guides/add-data-into-an-array-in-a-state-object
            https://pretagteam.com/question/react-setstate-not-updating-state-value */
            this.setState({listArray: this.state.listArray});
        }
    }

    // Function to delete list item from array
    deleteListItem(event) {
        // Check that input field is not empty
        if (this.state.deleteItem !== "") {
            // Iterate through array 
            for (let i = 0; i <= this.state.listArray.length -1; i++) {
                // If item to be deleted matches an item in the array, then continue
                if (this.state.listArray[i] === this.state.deleteItem) {
                    // Remove array item from position "i"
                    this.state.listArray.splice(i,1);
                
                    /* Resets state so that it updates to do list immediately. I learned to do this here:
                     https://www.pluralsight.com/guides/add-data-into-an-array-in-a-state-object
                     https://pretagteam.com/question/react-setstate-not-updating-state-value */
                    this.setState({listArray: this.state.listArray});
                    // Create alert to tell user the item has been deleted.
                    alert("List item '" + this.state.deleteItem + "' deleted.");
                }
            }
        }

    }

    // Render page elements
    render() {
        // Iterate through to do list array with map method and create a list item with each array item
        const listItems = this.state.listArray.map((item) => 
            <li key={item.toString()}>{item}</li>
        );

        return (
            <div className="toDoDiv">
                <h1>Add or delete an item from your list</h1>
                {/*Display to do list items from array. */}
                <ul>{listItems}</ul>

                {/* Create form for adding or deleting items.Includes onChange and onClick events to handle user 
                input. Styled with React Bootstrap. Learned how to use forms here:
                https://react-bootstrap.netlify.app/components/forms/ */}
                <Form>
                    <Form.Group> 
                        <Form.Label> Add Item: </Form.Label>
                        <Form.Control type="text" className="addItemInput" name="toAdd" placeholder="..."
                            onChange={this.handleAddChange} /> 
                    </Form.Group>

                    <Button variant="primary" onClick={this.addListItem}>Add item</Button>
                     
                    <Form.Group>
                        <Form.Label> Delete Item: </Form.Label>
                        <Form.Control type="text" className="deleteItemInput" name="toDelete" placeholder="..."
                            onChange={this.handleDeleteChange} /> 
                    </Form.Group>

                    <Button variant="primary" onClick={this.deleteListItem}>Delete item</Button>
                </Form>
            </div>
        );
    }

}

// Export component so it can be used by App.js
export default List;