# Working with React in Rails

## About

This app uses the [react-rails gem](https://github.com/reactjs/react-rails). See
the readme at the above link for more detailed information than this document
has.

## Example

For the purposes of this example, we will imagine that we have a *Users*
resource with *f_name* and *l_name* string attributes. You could generate this
in Rails using `rails generate resource User f_name:string l_name:string` and
then running the migration. We will also imagine that there are records in this
table in the database.

### Generate the `Users` React component

The installed gem adds a generator to Rails which creates a component file with
all the boilerplate, placing it in the right directory for the application to
serve it. To create the `Users` component, run the command `rails generate
react:component Users users:array`. This creates a React component in the file
`app/javascript/components/Users.js` that expects to receive a `users` prop that
is an array. You can modify this file like any other React component. For our
example, let's make it look like so:

```javascript
class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>All Users</h1>
        <ul>
          {this.props.users.map(user => (
            <li key={user.id}>{`${user.f_name} ${user.l_name}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

We can render this component using Rails as follows:

```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Users', props: { users: @users }
  end
end
```

Alternatively, you can have Rails render an ERB template as you normally would
in Rails:

```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
    # Default render of app/views/users/index.html.erb
  end
end
```

And then, anywhere in app/views/users/index.html.erb:

```html
<%= react_component("Users", { users: @users }) %>
```

You would use just one of the above two methods of rendering a component. Both
have their advantages and disadvantages. With the first you can only render a
single react component. The second is less convenient and clear, but allows you
to render multiple components in the same view using multiple calls to
`react_component`.

Both of these approaches require that the proper javascript (React, etc.) be
included in the rendered component. The gem we are using provides a helper that
you can then place in your layout file. Our project already includes the
following in app/views/layouts/application.html.erb, which is the default layout
for all rendiring.

```html
<%= javascript_pack_tag 'application' %>
```
