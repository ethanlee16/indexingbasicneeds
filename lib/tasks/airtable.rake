namespace :airtable do

  desc "Imports resources from Airtable base."
  task import: :environment do
    AirtableResource = Airrecord.table(ENV["AIRTABLE_API_KEY"], ENV["AIRTABLE_BASE_KEY"], ENV["AIRTABLE_RESOURCES_TABLE"])

    total_count = AirtableResource.all.count
    puts "Attempting to import #{total_count} resources from Airtable."
    created_count = 0
    AirtableResource.all.each do |r|
      title = r["Resource Name"]
      if Resource.where(title: title).exists?
        puts "Resource with title '#{title}' already exists in DB. Not copying from Airtable."
      else
        # Get this resource's category ID, to create resource categories
        resource_categories = []
        if (category = ResourceCategory.find_by(name: r["Resource Category"])).present?
          resource_categories << { resource_category_id: category.id }
        end 

        # Create the resource and also tag the resource category
        r = Resource.create!(
          title: title, 
          description: r["Description"], 
          contact_info: r["Phone / Email Contact"], 
          hours_of_operation: r["Hours of Operation"], 
          eligibility: r["Eligibility"], 
          cost_description: r["Costs"], 
          body: "<p>#{r["Additional Info"]}</p>", 
          link: r["Website"], 
          deadlines: r["Deadlines"], 
          admin_note: "#{r["Rationale**"]}\n\n#{r["Internal Contact**"]}\n\n#{r["Internal Notes**"]}", 
          resource_categories_resources_attributes: resource_categories, 
        )
        created_count += 1
      end
    end

    puts "Successfully imported #{created_count}/#{total_count} resources from Airtable!"
  end

end
