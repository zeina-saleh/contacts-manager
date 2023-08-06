<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactsController extends Controller
{
    public function show()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function add(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'phone' => 'required|max:20',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
        ]);

        Contact::create($validatedData);
        return response()->json(['message' => 'Contact added successfully']);
    }

    public function edit(Request $request, $id){
        try {
            $contact = Contact::findOrFail($id);
            
            $validatedData = $request->validate([
                'name' => 'required|max:255',
                'phone' => 'required|max:20',
                'latitude' => 'nullable|numeric',
                'longitude' => 'nullable|numeric',
            ]);

            $contact->update($validatedData);
            
            return response()->json(['message' => 'Contact updated successfully']);
        } catch (ModelNotFoundException $notFoundException) {
            return response()->json(['message' => 'Contact not found'], 404);
        } catch (Exception $otherException) {
            return response()->json(['message' => 'Error updating contact'], 500);
        }
    }

    public function deleteContact($id){
        try {
            $contact = Contact::findOrFail($id);
            $contact->delete();
            
            return response()->json(['message' => 'Contact deleted successfully']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Contact not found'], 404);
        } catch (Exception $e) {
            return response()->json(['message' => 'Error deleting contact'], 500);
        }
    }
}
