use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :phwocket_example, PhwocketExampleWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :phwocket_example, PhwocketExample.Repo,
  username: "postgres",
  password: "postgres",
  database: "phwocket_example_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
