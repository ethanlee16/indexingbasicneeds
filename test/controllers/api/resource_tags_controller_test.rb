require 'test_helper'

class Api::ResourceTagsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_resource_tags_index_url
    assert_response :success
  end

end
