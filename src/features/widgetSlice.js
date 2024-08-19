import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// POST Operation for adding the new widget
export const createWidget = createAsyncThunk("createWidget", async (data, {rejectWithValue}) => {
    if (data.category === "CSPM-Executive-dashboard") {
        const response = await fetch(`http://localhost:3000/CSPM-Executive-dashboard`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        });   
    } else if(data.category === "CWPP-dashboard") {
        const response = await fetch(`http://localhost:3000/CWPP-dashboard`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }); 
    } else if(data.category === "Registry-Scan") {
        const response = await fetch(`http://localhost:3000/Registry-Scan`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }); 
    } else {
        const response = await fetch(`http://localhost:3000/Ticket`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }); 
    }

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
}) ;

export const widgetSlice = createSlice({
    name:"widget",
    initialState: {
        value: [],
        loading: false,
        error: null
    },    
    extraReducers: (builder) => {
        // POST Operation - Widget Creation
        builder.addCase(createWidget.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(createWidget.fulfilled, (state, action) => {
            state.loading = false;
            state.value.push(action.payload)
        });

        builder.addCase(createWidget.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    },
});

export default widgetSlice.reducer;