export const storeSchool = async (formData) => {
    try {
      const response = await $fetch(
        "https://mapproject.nvs.la/api/v1/sg-5/schools_get_create/",
        {
          method: "POST",
          body: formData,
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  