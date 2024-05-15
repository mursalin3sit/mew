export const updateRoutineSchool = async (formData, id) => {
    try {
        const response = await $fetch(
            "https://mapproject.nvs.la/api/v1/sg-5/schools_get_create/" + id+"/",
            {
                method: "PUT",
                body: formData,
            }
        );
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
