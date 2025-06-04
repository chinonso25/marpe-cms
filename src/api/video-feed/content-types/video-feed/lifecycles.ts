// path: src/api/article/content-types/article/lifecycles.ts

export default {
  async afterUpdate(event) {
    return;
    const { result } = event;
    try {
      const { title, videoID } = result;
      const rawBody = JSON.stringify({
        title: "Time to Study",
        body: title,
        route: `/MessageHub/MessageScreen/${videoID}`,
      });

      await fetch(
        "https://marpe-cloud-functions.chinonso25.workers.dev/send-push-notification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: rawBody,
        }
      );
    } catch (error) {
      strapi.log.error("Failed to call events-feed webhook:", error);
    }
  },
};
