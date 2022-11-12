import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredJob, setFilteredJob] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [action, setAction] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [data, setData] = useState([]);

  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  const [register, setRegister] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const [newJob, setNewJob] = useState({
    company_name: "",
    title: "",
    company_image_url: "",
    company_city: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    job_description: "",
    job_qualification: "",
    salary_min: 0,
    salary_max: 0,
  });

  // get job data
  useEffect(() => {
    if (fetchStatus === true) {
      const fetchData = async () => {
        await axios
          .get("https://dev-example.sanbercloud.com/api/job-vacancy")
          .then((res) => setJobs(res.data.data))
          .catch((err) => console.log(err));
        setFetchStatus(false);
      };
      fetchData();
    }
  }, [filteredJob, setFilteredJob, fetchStatus, setFetchStatus]);

  // minimize string
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // format rupiah
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // handle Filter Submit
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const result = jobs.filter((job) => {
      return filterValue.toLocaleLowerCase() === ""
        ? job
        : filterValue.toLowerCase() === "kota"
        ? job.company_city.toLowerCase().includes(filter.toLowerCase())
        : filterValue.toLocaleLowerCase() === "job"
        ? job.title.toLowerCase().includes(filter.toLocaleLowerCase())
        : filterValue.toLocaleLowerCase() === "salary"
        ? job.salary_min >= parseInt(filter)
        : null;
    });
    setAction(false);
    setFilterValue("");
    setFilterStatus(true);
    setFilteredJob(result);
  };

  const handleClear = () => {
    setAction(false);
    setFilterValue("");
    setFilterStatus(false);
    setFilteredJob([]);
  };

  // Register
  const handleChangeRegister = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setRegister({ ...register, [name]: value });
  };

  //
  const handleRegister = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = register;

    axios
      .post("https://dev-example.sanbercloud.com/api/register ", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        let token = res.data;
        setData(res.data);
        Cookies.set("token", token.token);
        navigate("/");
      })
      .catch((err) => alert(err.response.data));
    console.log(register);
  };

  // Logout
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  // login
  const handleChangeLogin = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setLogin({ ...login, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = login;

    axios
      .post("https://dev-example.sanbercloud.com/api/login ", {
        email,
        password,
      })
      .then((res) => {
        let token = res.data;
        setData(res.data);
        Cookies.set("token", token.token);
        navigate("/");
      })
      .catch((err) => alert(err.response.data));
  };

  // Create New Job Input
  const handleNewJobInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setNewJob({ ...newJob, [name]: value });
  };

  // Create Job
  const handleNewJob = (event) => {
    event.preventDefault();
    let {
      company_name,
      title,
      company_image_url,
      company_city,
      job_type,
      job_tenure,
      job_status,
      job_description,
      job_qualification,
      salary_min,
      salary_max,
    } = newJob;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            company_name,
            title,
            company_image_url,
            company_city,
            job_type,
            job_tenure,
            job_status,
            job_description,
            job_qualification,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            company_name,
            title,
            company_image_url,
            company_city,
            job_type,
            job_tenure,
            job_status,
            job_description,
            job_qualification,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        })
        .catch((err) => alert(err));
    }

    setCurrentId(-1);
    setNewJob({
      company_name: "",
      title: "",
      company_image_url: "",
      company_city: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      job_description: "",
      job_qualification: "",
      salary_min: 0,
      salary_max: 0,
    });
  };

  // handle Edit
  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);

    const fetchData = async () => {
      await axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
          let data = res.data;
          navigate("/dashboard/list-job-vacancy/edit/" + idData);
          console.log(data);
          setNewJob({
            company_name: data.company_name,
            title: data.title,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        })
        .catch((err) => alert(err));
    };
    fetchData();
  };

  // Delete Data
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    const deleteData = async () => {
      await axios
        .delete(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        })
        .catch((err) => console.log(err));
    };
    deleteData();
  };

  const handleInputChangePassword = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setPassword({ ...password, [name]: value });
  };

  // Change Password
  const handleChangePassword = (event) => {
    event.preventDefault();
    let { current_password, new_password, new_confirm_password } = password;
    const changePassword = async () => {
      await axios
        .post(
          "https://dev-example.sanbercloud.com/api/change-password",
          { current_password, new_password, new_confirm_password },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          alert(res.data);
          navigate("/dashboard");
        })
        .catch((err) => alert(err.response.data));
    };
    changePassword();
  };

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setSearchValue,
        filterValue,
        setFilterValue,
        jobs,
        rupiah,
        truncateString,
        filter,
        setFilter,
        handleFilterSubmit,
        filteredJob,
        setFilteredJob,
        filterStatus,
        action,
        setAction,
        handleClear,
        register,
        handleChangeRegister,
        handleRegister,
        handleLogout,
        login,
        handleChangeLogin,
        handleLogin,
        profileModal,
        setProfileModal,
        data,
        handleNewJobInput,
        handleNewJob,
        newJob,
        handleEdit,
        handleDelete,
        password,
        handleInputChangePassword,
        handleChangePassword,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function UserGlobal() {
  return useContext(GlobalContext);
}
