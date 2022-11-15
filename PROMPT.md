# User Admin Portal Prototype

Goal: Create a user admin portal with an Undo + Redo system.

Requirements:

1. Users have the following information: First Name, Last Name, and Email.
2. Users can be created and deleted.
3. Each action should be "autosaving", ie. the backend (in this case just `ApiService.ts`) should be updated and kept in sync. Therefore, for undo we must roll back the local state as well as make the appropriate update in the remote state. Same for redo.
4. Undo/redo should work similarly to what we are all familiar with in other apps (and as it works in the text editor you are likely currently using!).
5. If a user creation is undone, if redone, the user should be recreated with the same user id.
6. Do NOT modify `ApiService.ts`
7. Design should be responsive and please follow `Design.png` file for UI reference.

# IMPORTANT

We have given you some very basic react components to get started.

Feel free to include other dependencies if you think they will be helpful.
However, do NOT include any dependencies to implement undo/redo.
