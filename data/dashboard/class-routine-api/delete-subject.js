export const deleteSubject = async (id) => {
    try {
      const response = await $fetch(
        "https://mapproject.nvs.la/api/v1/sg-5/subjects_get_create/"+id,
        {
          method: "DELETE",
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  