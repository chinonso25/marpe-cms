// path: src/api/article/content-types/article/lifecycles.ts

export default {
  async afterUpdate(event) {
    const { result } = event;
    try {
      const { title } = result;
      await fetch(
        "https://marpe-cloud-functions.chinonso25.workers.dev/send-push-notification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "New Treasure Hunt Link",
            body: "Let's study the Word!",
            route: "https://www.marpeassembly.org/sfcdworksheet",
          }),
        }
      );
    } catch (error) {
      strapi.log.error("Failed to call events-feed webhook:", error);
    }
  },
};
