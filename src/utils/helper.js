export const courseValidation = (
  nameRef,
  descRef,
  tagsRef,
  idRef,
  passRef,
  setErrorMessage,
  setNewCourseData
) => {
  const inputName = nameRef.current.value;
  const inputDesc = descRef.current.value;
  const inputTags = tagsRef.current.value.split(",");
  const inputId = idRef.current.value;
  const password = passRef.current.value;

  if (password !== process.env.REACT_APP_ADMIN_PASSWORD) {
    setErrorMessage("Wrong Password!");
    return;
  }

  setNewCourseData((prevData) => ({
    ...prevData,
    courseName: inputName,
    courseDesc: inputDesc,
    courseTags: inputTags,
    playlistId: inputId,
  }));
};
