// path: src/api/article/content-types/article/lifecycles.ts

export default {
  async afterUpdate(event) {
    return;
    const { result } = event;
    try {
      const { Title: title, documentId } = result;
      await fetch(
        "https://marpe-cloud-functions.chinonso25.workers.dev/send-push-notification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "New Event",
            body: title,
            route: `/Home/Article/${documentId}?type=events`,
          }),
        }
      );
    } catch (error) {
      strapi.log.error("Failed to call events-feed webhook:", error);
    }
  },
};
