// path: src/api/article/content-types/article/lifecycles.ts

export default {
  async afterUpdate(event) {
    const { result } = event;
    try {
      const { Title: title, Description: description, documentId } = result;
      await fetch(
        "https://marpe-cloud-functions.chinonso25.workers.dev/send-push-notification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            body: description,
            route: `marpe://tabs/Home/Article/${documentId}?type=news`,
          }),
        }
      );
    } catch (error) {
      strapi.log.error("Failed to call events-feed webhook:", error);
    }
  },
};
