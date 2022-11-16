import { connect } from "react-redux";
import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
      searchStatus: false,
    };
  }

  componentDidMount() {
    this.props.fetch();
    this.props.clearForm();
  }

  submitHandle = async () => {
    let form = Object.assign({}, this.props.form);
    form = {
      ...form,
    };
    const json = await this.props.submit({ userData: form });
    if (json !== undefined) {
      if (json.status === 200) {
        console.log("User added successfully.");
      }
    }
  };

  deleteHandle = (data) => {
    this.props.delete(data);
    // console.log(data, "-------");
  };

  addForm = (key, value) => {
    const form = Object.assign({}, this.props.form);
    form[key] = value;
    this.props.addForm(form);
  };

  toggleSearch = () => {
    this.setState({ searchStatus: !this.state.searchStatus });
  };

  editHandle = (data) => {
    data = {
      ...data,
      userId: data.id,
    };
    const form = data;
    this.props.addForm(form);
  };

  updateUser = () => {
    const form = Object.assign({}, this.props.form);
    this.props.update(form);
  };

  render() {
    const form = Object.assign({}, this.props.form);
    const { data } = this.props;
    const { searchItem } = this.state;
    console.log(data, "----------");
    return (
      <div className="container p-10 mx-auto max-w-[500px]">
        <div>
          <h4 className="font-medium text-black text-[18px] leading-[18px]">
            Add Form
          </h4>
          <div className="mt-[20px] mb-[30px]">
            <div className="grid lg:grid-flow-col lg:grid-rows-3 xl:gap-x-[40px] lg:gap-x-[20px] lg:gap-y-[20px] gap-y-[30px]">
              {/* <div className="lg:col-span-2">
                <input
                  maxLength={28}
                  onChange={(e) => this.addForm("id", e.target.value || "")}
                  value={form.id || ""}
                  type="text"
                  placeholder="id"
                  className="bg-gray-200 w-full mx-auto h-[45px] px-3 rounded-[10px] text-[18px] lg:placeholder:font-normal placeholder:font-light font-normal placeholder:text-[black]/30 text-black shadow-none outline-none"
                />
              </div> */}
              <div className="lg:col-span-2">
                <input
                  maxLength={28}
                  onChange={(e) =>
                    this.addForm("username", e.target.value || "")
                  }
                  value={form.username || ""}
                  type="text"
                  placeholder="name"
                  className="bg-gray-200 w-full mx-auto h-[45px] px-3 rounded-[10px] text-[18px] lg:placeholder:font-normal placeholder:font-light font-normal placeholder:text-[black]/30 text-black shadow-none outline-none"
                />
              </div>
              <div className="lg:col-span-2">
                <input
                  maxLength={28}
                  onChange={(e) => this.addForm("name", e.target.value || "")}
                  value={form.name || ""}
                  type="text"
                  placeholder="name"
                  className="bg-gray-200 w-full mx-auto h-[45px] px-3 rounded-[10px] text-[18px] lg:placeholder:font-normal placeholder:font-light font-normal placeholder:text-[black]/30 text-black shadow-none outline-none"
                />
              </div>
              <div className="lg:col-span-2">
                <input
                  onChange={(e) => this.addForm("email", e.target.value || "")}
                  type="text"
                  value={form.email || ""}
                  maxLength={50}
                  placeholder="email"
                  className="bg-gray-200  w-full mx-auto h-[45px] px-3 rounded-[10px] text-[18px] lg:placeholder:font-normal placeholder:font-light font-normal placeholder:text-[black]/30 text-black shadow-none outline-none"
                />
              </div>
              <div className="lg:col-span-2">
                <input
                  onChange={(e) =>
                    this.addForm("password", e.target.value || "")
                  }
                  type="text"
                  value={form.password || ""}
                  maxLength={50}
                  placeholder="password"
                  className="bg-gray-200 w-full mx-auto h-[45px] px-3 rounded-[10px] text-[18px] lg:placeholder:font-normal placeholder:font-light font-normal placeholder:text-[black]/30 text-black shadow-none outline-none"
                />
              </div>
            </div>
            <div className="mt-[20px] flex items-center gap-x-[20px]">
              {!form.id && (
                <button
                  onClick={this.submitHandle}
                  className=" border-[#000] text-[#000] w-[92px]
                               tracking-[0.02em] flex items-center justify-center bg-transparent border-[1.5px] rounded-full h-[35px] font-normal text-[16px] cursor-pointer transition-all duration-700 ease-in-out">
                  add
                </button>
              )}
              {form.id && (
                <button
                  onClick={this.updateUser}
                  className=" border-[#000] text-[#000] w-[92px]
                               tracking-[0.02em] flex items-center justify-center bg-transparent border-[1.5px] rounded-full h-[35px] font-normal text-[16px] cursor-pointer transition-all duration-700 ease-in-out">
                  update
                </button>
              )}
            </div>
          </div>
        </div>
        <input
          type="text"
          onFocus={this.toggleSearch}
          onChange={(event) => {
            this.setState({ searchItem: event.target.value });
          }}
          placeholder="search by username"
          className="w-full h-12 px-2 font-normal bg-gray-200 placeholder:text-[black]/40 rounded-lg"
        />

        <h2 className="mt-10">USERS</h2>
        {data
          .filter((item) => {
            // console.log(item, "refresh");
            if (searchItem == "") {
              return item;
            } else if (
              item &&
              item.username.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, key) => (
            <div key={key}>
              <div className="p-2 m-2 my-5 border rounded-lg">
                <div>
                  <div>
                    <div>
                      {/* <h3 className=" black">id:{item.id}</h3> */}
                      <h3 className=" black">username: {item.username}</h3>
                      <h3 className=" black">name: {item.name}</h3>
                      <p>email:{item.email}</p>
                      {/* <p>password:{item.password}</p> */}
                    </div>
                    <div className="flex gap-x-5">
                      <button
                        onClick={() => this.deleteHandle(item)}
                        className=" border-[#f6104e] c-primary w-[92px]
                tracking-[0.02em] flex items-center justify-center bg-transparent border-[1.5px] rounded-full h-[35px] font-normal text-[16px] cursor-pointer transition-all duration-700 ease-in-out">
                        delete
                      </button>
                      <button
                        onClick={() => this.editHandle(item)}
                        className=" border-[#f6104e] c-primary w-[92px]
                tracking-[0.02em] flex items-center justify-center bg-transparent border-[1.5px] rounded-full h-[35px] font-normal text-[16px] cursor-pointer transition-all duration-700 ease-in-out">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ listing }) => {
  return {
    form: listing.form,
    data: listing.list.data,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { dispatch } = dispatchProps;
  const { actions } = require("./redux/ListingRedux");
  return {
    ...stateProps,
    fetch: (data) => {
      actions.fetchList(dispatch, data);
    },
    submit: (data) => {
      actions.addUserForm(dispatch, data);
    },
    addForm: (form) => {
      dispatch(actions.addForm(form));
    },
    delete: (data) => {
      actions.daleteUserList(dispatch, data);
    },
    update: (data) => {
      actions.updateUserForm(dispatch, data);
    },
    clearForm: () => {
      dispatch(actions.clearForm());
    },
  };
};

export default connect(mapStateToProps, undefined, mergeProps)(App);
