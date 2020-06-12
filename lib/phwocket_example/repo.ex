defmodule PhwocketExample.Repo do
  use Ecto.Repo,
    otp_app: :phwocket_example,
    adapter: Ecto.Adapters.Postgres
end
